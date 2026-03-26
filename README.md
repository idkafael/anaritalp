# Sistema Aulão Ana Rita (Checkout Hotmart VIP)

Este é um sistema completo "full-stack premium" projetado para vender ingressos com segurança de dados (LGPD) anti-fraude para Hotmart e liberar acesso ao Grupo VIP + Transmissão de forma automática.

## Tecnologias e Arquitetura

1. **Frontend (Next.js 14 App Router)**:
   - Fica na pasta `frontend/`. 
   - Renderização super rápida.
   - Cinematic Design & Copywriting Apple-tier (Tailwind).
   - *Rotas*:
     - `/` - Landing page de alto impacto
     - `/checkout` - Pega UTMs/Pixeis invisivelmente, bate na API para criar ordem (lead), retorna URL Hotmart dinâmico
     - `/obrigado` - Página para onde Hotmart envia de volta após aprovação (polling a cada 3s com o Backend)
     - `/acesso` - Área do Aluno liberada via token gerado seguro.
2. **Backend (FastAPI & PostgreSQL)**:
   - Fica em `backend/`.
   - Idempotência exigida em servidores webhooks de meios de pagamento.
   - Tabela de rastreamento blindado que protege o IP do cliente de burlar querystring com `status=pago`.

## Como Executar o Sistema Todo

### Terminal 1: Banco e API
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env # ajuste a string do banco
uvicorn app.main:app --reload --port 8000
```
> Obs: Como padrão `main.py` usa `Base.metadata.create_all`, um banco `aulao.db` do SQLite é gerado na primeira inicialização para você testar liso. Se quiser postgres, altere o env DATABASE_URL.

### Terminal 2: O Frontend
```bash
cd frontend
npm install --legacy-peer-deps
npm run dev
```

Abra o [http://localhost:3000](http://localhost:3000). E seja bem-vindo à conversão Extrema.

## Regras de Hotmart (Para setup posterior do cliente)
Para que o sistema de polling para clientes Pix aprovados imediato funcione:
1. Em sua conta **Hotmart Developer**, vá em Webhooks.
2. Adicione que TODAS as notificações de *PURCHASE_APPROVED*, *CHARGEBACK* e *REFUNDED* apontem para -> `https://sua-api.com/api/webhooks/hotmart`.
3. Pegue o "Token de Autenticação Hottok" nas configurações da Hotmart e coloque na env `HOTMART_WEBHOOK_SECRET` do backend.
4. Vá nas configurações do Produto dentro do Painel da Hotmart, em **Página de Obrigado Customizada**, habilite `Adicionar parâmetros à URL de redirecionamento` e configure o redirecionamento com a querystring base assim: `https://seufrontend.com/obrigado?order_id={src}` 
*(nota: O order id gerado pelo backend via `api/order/create` é enviado usando o campo `src` para a Hotmart, para que a hotmart repasse no checkout).*
