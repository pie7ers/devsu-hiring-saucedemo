# DEVSU - HIRING PROCESS

## ENGLISH

## Description

End-to-end automated test for the purchase flow in Saucedemo using Cypress.

Covered flow:

1. Login with standard_user
2. Add two products to cart
3. Open cart
4. Complete checkout form
5. Finish purchase
6. Validate confirmation message:
   "THANK YOU FOR YOUR ORDER"

---

## Tech Stack

- Cypress
- TypeScript
- Mochawesome Reporter
- GitHub Actions
- PNPM

---

## Installation

### Requirements

- Node.js >= 24
- PNPM >= 10
- install pnpm: `npm install -g pnpm`
- install dependencies: `pnpm install`
- copy .env.example to .env: `cp .env.example .env`
- Configure the .env file with the environment variables: `BASE_URL` and `ENABLE_SCREENSHOTS`
    - ENABLE_SCREENSHOTS: "1" to enable screenshots, "0" to disable screenshots
- To run tests locally: `pnpm test`
- report available `cypress/reports/html/index.html`

## ESPAÑOL

## Descripción

Prueba automatizada de extremo a extremo para el flujo de compra en Saucedemo utilizando Cypress.

Flujo cubierto:

1. Inicio de sesión con standard_user
2. Añadir dos productos al carrito
3. Abrir el carrito
4. Completar el formulario de pago
5. Finalizar la compra
6. Validar mensaje de confirmación:
   "THANK YOU FOR YOUR ORDER"

---

## Tech Stack

- Cypress
- TypeScript
- Mochawesome Reporter
- GitHub Actions
- PNPM

---

## Instalación

### Requisitos

- Node.js >= 24
- PNPM >= 10
- instalar pnpm: `npm install -g pnpm`
- instalar dependencias: `pnpm install`
- copiar .env.example a .env: `cp .env.example .env`
- Configurar el archivo .env con las variables de entorno: `BASE_URL` y `ENABLE_SCREENSHOTS`
    - ENABLE_SCREENSHOTS: "1" para habilitar capturas de pantalla, "0" para deshabilitar capturas de pantalla
- Para ejecutar las pruebas localmente: `pnpm test`
- Reporte disponible en `cypress/reports/html/index.html`
