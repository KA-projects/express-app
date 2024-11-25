## To compile the TypeScript code and run it:

- **Compile** the TypeScript files using `tsc`:
  ```bash
  npx tsc
  ```
  This will generate the compiled JavaScript files in the `dist` folder.

- **Run the compiled JavaScript** using Node.js:
  ```bash
  node dist/index.js
  ```
- Not work **`ts-node-dev`** !


### **Folder Structure**

```
express-state-app/
├── src/
│   ├── controllers/
│   │   └── document.controller.ts   # Handles requests and responses
│   ├── services/
│   │   ├── document.context.ts        # State class and document entity
│   │   ├── document.interface.ts      # interface of document 
│   │   ├── states/
│   │   │   ├── draft.state.ts       # Draft state logic
│   │   │   ├── moderation.state.ts  # Moderation state logic
│   │   │   └── published.state.ts   # Published state logic
│   ├── routes/
│   │   └── document.routes.ts       # Routes for document state transitions
│   ├── app.ts                       # Express app setup
│   └── server.ts                    # Entry point of the app
├── .env                              # Environment variables
├── package.json                      # Node.js dependencies
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # Documentation
```

---



### **How It Works**

1. The **State Pattern** is implemented in `src/models/states/` using the `DocumentState` interface and concrete states (`DraftState`, `ModerationState`, `PublishedState`).
2. The `Document` class manages the current state and delegates actions to it.
3. The `document.controller.ts` handles HTTP requests to interact with the document:
   - `GET /document/state` to get the current state.
   - `POST /document/publish` to transition the document to the next state.
4. Routes and controllers handle interactions, providing clean separation of concerns.

---

### **Running the Application**

1. **Install Dependencies**
   ```bash
   npm install
   ```


2. **Start the Server**
   ```bash
   npm run dev
   ```

---

### **Example API Interaction with State pattern**

1. **Get Initial State**
   ```bash
   curl http://localhost:5151/document/state
   # Response: { "currentState": "Draft" }
   ```

2. **Publish the Document (Draft → Moderation)**
   ```bash
   curl -X POST http://localhost:5151/document/publish
   # Response: { "message": "State transitioned", "currentState": "Moderation" }
   ```

3. **Publish Again (Moderation → Published)**
   ```bash
   curl -X POST http://localhost:5151/document/publish
   # Response: { "message": "State transitioned", "currentState": "Published" }
   ```

4. **Try Publishing Again (Published)**
   ```bash
   curl -X POST http://localhost:5151/document/publish
   # Response: { "message": "State transitioned", "currentState": "Published" }
   ```


### **Example API Interaction with Strategy pattern**

1. **Make a Payment via Credit Card**
   ```bash
   curl -X POST http://localhost:5151/payment/pay \
    -H "Content-Type: application/json" \
    -d '{"method": "creditCard", "amount": 100}'

   ```

2. **Make a Payment via PayPal**
   ```bash
   curl -X POST http://localhost:5151/payment/pay \
    -H "Content-Type: application/json" \
    -d '{"method": "paypal", "amount": 200}'
   ```