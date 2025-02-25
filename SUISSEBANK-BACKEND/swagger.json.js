const swagger = {
  "openapi": "3.0.0",
  "info": {
    "title": "API Suisse Bank",
    "description": "Este é um projeto de teste desenvolvido para fins didáticos\n\nGitHub: [https://github.com/JoseAugustoDosSantos/Banco_Suisse](https://github.com/JoseAugustoDosSantos/Banco_Suisse)\n",
    "contact": {
      "email": "augusto03jose@gmail.com"
    },
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "http://localhost:3000",
      "description": "Localhost"
    }
  ],
  "paths": {
    "/users": {
      "get": {
        "tags": [
          "Users"
        ],
        "summary": "Lista os usuários cadastrados",
        "description": "Lista todos os usuários cadastrados\n",
        "operationId": "listUser",
        "responses": {
          "200": {
            "description": "resposta de sucesso",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/listUsers"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Users"
        ],
        "summary": "Adiciona um usuário ao sistema",
        "description": "Adiciona um usuário ao sistema",
        "operationId": "addUsers",
        "requestBody": {
          "description": "Exemplo de request",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/bodyAdd"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "User Created",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/addUserSuccess"
                }
              }
            }
          }
        }
      }
    },
    "/users/{_id}": {
      "delete": {
        "tags": [
          "Users"
        ],
        "summary": "Remove um usuário do sistema",
        "description": "Remove usuários do sistema",
        "operationId": "deleteUsers",
        "parameters": [
          {
            "name": "_id",
            "in": "path",
            "description": "UserId adicionado pelo MongoDB",
            "required": true,
            "style": "simple",
            "explode": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "User removed",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/deleteUsers"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "deleteUsers": {
        "required": [
          "success"
        ],
        "type": "object",
        "properties": {
          "success": {
            "type": "string",
            "example": "usuário removido"
          }
        }
      },
      "listUsers": {
        "required": [
          "users"
        ],
        "type": "object",
        "properties": {
          "users": {
            "$ref": "#/components/schemas/users"
          }
        }
      },
      "users": {
        "required": [
          "user"
        ],
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/user"
        }
      },
      "user": {
        "required": [
          "_id",
          "balance",
          "login",
          "name"
        ],
        "type": "object",
        "properties": {
          "_id": {
            "type": "string",
            "example": "67b9ffbe425024c0088a4a5d"
          },
          "name": {
            "type": "string",
            "example": "Jose Augusto dos Santos"
          },
          "balance": {
            "type": "integer",
            "example": 1000
          },
          "login": {
            "$ref": "#/components/schemas/user_login"
          }
        }
      },
      "bodyAdd": {
        "required": [
          "balance",
          "login",
          "name"
        ],
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Jose Augusto dos Santos"
          },
          "balance": {
            "type": "integer",
            "example": 1000
          },
          "login": {
            "$ref": "#/components/schemas/bodyAdd_login"
          }
        }
      },
      "addUserSuccess": {
        "required": [
          "message",
          "user"
        ],
        "type": "object",
        "properties": {
          "message": {
            "type": "string",
            "example": "Usuário criado com sucesso"
          },
          "user": {
            "$ref": "#/components/schemas/addUserSuccess_user"
          }
        }
      },
      "user_login": {
        "required": [
          "email",
          "pwd"
        ],
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "example": "augusto03jose@gmail.com"
          },
          "pwd": {
            "type": "string",
            "example": "1234abc@"
          }
        }
      },
      "bodyAdd_login": {
        "required": [
          "email",
          "pwd"
        ],
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "example": "augusto03jose@gmail.com"
          },
          "pwd": {
            "type": "string",
            "example": "1234acb@"
          }
        }
      },
      "addUserSuccess_user": {
        "required": [
          "_id",
          "balance",
          "login",
          "name"
        ],
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "example": "Jose Augusto dos Santos"
          },
          "balance": {
            "type": "integer",
            "example": 1000
          },
          "login": {
            "$ref": "#/components/schemas/user_login"
          },
          "_id": {
            "type": "string",
            "example": "67b9ffbe425024c0088a4a5d"
          }
        }
      }
    }
  }
}

export default swagger;