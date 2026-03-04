# Backend API
Essa API serve como ponte entre o checkout e o front.

## Stack
- FastAPI, SQLAlchemy, Pydantic, Python-dotenv

## Como rodar
1. Crie um ambiente virtual: `python -m venv venv`
2. Ative: `venv\Scripts\activate` (windows)
3. Instale pacotes: `pip install -r requirements.txt`
4. Copie o arquivo `.env` para apontar p/ seu banco PostgreSQL ou SQLite (padrão demo).
5. Inicie: `uvicorn app.main:app --reload --port 8000`

A API ficará de pé em http://localhost:8000. 
O Swagger Docs está em http://localhost:8000/docs.

## Endpoints
- `POST /api/order/create`: Rota usada pelo CTA da Landing Page para criar o lead passivo e voltar a URL do checkout da Hotmart com UTMs embutidas e src.
- `GET /api/order/{id}`: Verifica se a ordem se encontra paga (faz polling para a página de obrigado).
- `POST /api/webhooks/hotmart`: Webhook secreto para a Hotmart avisar compra aprovada e processar idempotentemente no banco.
- `GET /api/access/resolve?token=XXX`: Endpoint seguro onde mostra acessos de alunos que entraram pelo token do e-mail.
