Certainly! Below is an overview of the routes and their functionality based on the provided code. This documentation gives a high-level understanding of how the routes are structured and what each group of routes is responsible for.

---

### **Routes Overview**

The application uses the **Gin** framework to define routes. The routes are grouped into two main categories:

1. **Authentication Routes (`/api/auth`)**
2. **Complaint Routes (`/api/complaints`)**

Each group of routes is protected or exposed based on the requirements (e.g., authentication middleware).

---

### **1. Authentication Routes (`/api/auth`)**

This group of routes handles user authentication and user management. These routes are publicly accessible (no authentication required).

#### **Routes:**
- **POST `/api/auth/login`**
  - **Handler:** `controllers.LoginHandler`
  - **Description:** Authenticates a user and returns a token (e.g., JWT) for accessing protected routes.

- **POST `/api/auth/signup`**
  - **Handler:** `controllers.Signup`
  - **Description:** Registers a new user in the system.

- **GET `/api/auth/users`**
  - **Handler:** `controllers.GetAllUsers`
  - **Description:** Retrieves a list of all users in the system. This route is typically used for administrative purposes.

---

### **2. Complaint Routes (`/api/complaints`)**

This group of routes handles complaint-related operations. These routes are protected by the `middleware.Authenticator()` middleware, meaning the user must be authenticated (e.g., provide a valid token) to access them.

#### **Routes:**
- **POST `/api/complaints/create`**
  - **Handler:** `controllers.CreateComplaint`
  - **Description:** Allows an authenticated user to create a new complaint.

- **GET `/api/complaints/all`**
  - **Handler:** `controllers.GetUserComplaints`
  - **Description:** Retrieves all complaints for the authenticated user. If the user is an admin, it retrieves all complaints from all users.

- **GET `/api/complaints/complaint/:id`**
  - **Handler:** `controllers.GetComplaint`
  - **Description:** Retrieves details of a specific complaint by its ID.

- **PUT `/api/complaints/:id`**
  - **Handler:** `controllers.UpdateComplaint`
  - **Description:** Updates an existing complaint by its ID. Only the owner of the complaint or an admin can update it.

- **DELETE `/api/complaints/:id`**
  - **Handler:** `controllers.DeleteComplaint`
  - **Description:** Deletes a complaint by its ID. Only the owner of the complaint or an admin can delete it.

---

### **Middleware**
- **`middleware.Authenticator()`**
  - This middleware is applied to all routes in the `/api/complaints` group.
  - It ensures that only authenticated users (with a valid token) can access these routes.

---

### **Summary of Route Groups**

| **Route Group**       | **Path**               | **Method** | **Handler**               | **Description**                                                                 |
|------------------------|------------------------|------------|---------------------------|---------------------------------------------------------------------------------|
| **Authentication**     | `/api/auth/login`      | POST       | `controllers.LoginHandler` | Authenticates a user and returns a token.                                       |
|                        | `/api/auth/signup`     | POST       | `controllers.Signup`      | Registers a new user.                                                           |
|                        | `/api/auth/users`      | GET        | `controllers.GetAllUsers` | Retrieves all users (admin-only).                                               |
| **Complaints**         | `/api/complaints/create`| POST       | `controllers.CreateComplaint` | Creates a new complaint.                                                      |
|                        | `/api/complaints/all`  | GET        | `controllers.GetUserComplaints` | Retrieves all complaints for the user (or all complaints if admin).          |
|                        | `/api/complaints/complaint/:id` | GET | `controllers.GetComplaint` | Retrieves a specific complaint by ID.                                         |
|                        | `/api/complaints/:id`  | PUT        | `controllers.UpdateComplaint` | Updates a specific complaint by ID.                                           |
|                        | `/api/complaints/:id`  | DELETE     | `controllers.DeleteComplaint` | Deletes a specific complaint by ID.                                           |

---

### **Next Steps**
You can now provide the code for each controller function, and I will help you document each function in detail with parameters, return values, and descriptions. Let me know which function you'd like to start with!

Here is the documentation for all the functions in the provided Go files. Each function is explained in detail, including its purpose, parameters, and behavior.

---

## **File: admin.go**

### **Function: `EnsureAdmin`**
```go
func EnsureAdmin() gin.HandlerFunc
```
- **Purpose**: Middleware to ensure that the user has an admin role before proceeding with the request.
- **Parameters**: None (uses the `gin.Context` object).
- **Behavior**:
  - Retrieves the user's role using the `GetRole` function.
  - If the role is not `"admin"`, the request is aborted with a `401 Unauthorized` status and an error message.
  - If the role is `"admin"`, the request proceeds to the next middleware or handler.

---

## **File: cors.go**

### **Function: `CORS`**
```go
func CORS() gin.HandlerFunc
```
- **Purpose**: Middleware to handle Cross-Origin Resource Sharing (CORS) for the server.
- **Parameters**: None (uses the `gin.Context` object).
- **Behavior**:
  - Sets the following headers:
    - `Access-Control-Allow-Origin`: Allows all origins (`*`).
    - `Access-Control-Allow-Credentials`: Allows credentials.
    - `Access-Control-Allow-Headers`: Specifies allowed headers (e.g., `Content-Type`, `Authorization`).
    - `Access-Control-Allow-Methods`: Specifies allowed HTTP methods (e.g., `POST`, `GET`, `PUT`, `DELETE`).
  - If the request method is `OPTIONS`, it responds with a `204 No Content` status and aborts the request.
  - Otherwise, the request proceeds to the next middleware or handler.

---

## **File: authenticator.go**

### **Function: `Authenticator`**
```go
func Authenticator() gin.HandlerFunc
```
- **Purpose**: Middleware to authenticate requests using a Bearer token.
- **Parameters**: None (uses the `gin.Context` object).
- **Behavior**:
  - Retrieves the `Authorization` header from the request.
  - Validates the format of the header (must be `Bearer <token>`).
  - Calls the `validateToken` function to validate the token.
  - If the token is valid, sets the `userID` and `role` in the context.
  - If the token is invalid, the request is aborted with a `401 Unauthorized` status and an error message.

### **Function: `GetUserID`**
```go
func GetUserID(ctx *gin.Context) string
```
- **Purpose**: Retrieves the `userID` from the context.
- **Parameters**:
  - `ctx`: The `gin.Context` object.
- **Returns**: The `userID` as a string.

### **Function: `GetRole`**
```go
func GetRole(ctx *gin.Context) string
```
- **Purpose**: Retrieves the `role` from the context.
- **Parameters**:
  - `ctx`: The `gin.Context` object.
- **Returns**: The `role` as a string.

### **Function: `GetEmail`**
```go
func GetEmail(ctx *gin.Context) string
```
- **Purpose**: Retrieves the `email` from the context.
- **Parameters**:
  - `ctx`: The `gin.Context` object.
- **Returns**: The `email` as a string.

---

## **File: jwt.go**

### **Function: `GenerateToken`**
```go
func GenerateToken(userID string, role string, long bool) (string, error)
```
- **Purpose**: Generates a JWT token for a user.
- **Parameters**:
  - `userID`: The ID of the user.
  - `role`: The role of the user (e.g., `"admin"`, `"user"`).
  - `long`: A boolean indicating whether to use a long expiration time.
- **Returns**:
  - `string`: The generated JWT token.
  - `error`: An error if token generation fails.
- **Behavior**:
  - Determines the expiration time based on the `long` parameter.
  - Creates a `CustomClaims` object with the `userID`, `role`, and standard claims (e.g., `ExpiresAt`, `IssuedAt`).
  - Signs the token using the HMAC signing method and the private key.

### **Function: `validateToken`**
```go
func validateToken(encodedToken string) (string, string, error)
```
- **Purpose**: Validates a JWT token and extracts the `userID` and `role`.
- **Parameters**:
  - `encodedToken`: The JWT token to validate.
- **Returns**:
  - `string`: The `userID` extracted from the token.
  - `string`: The `role` extracted from the token.
  - `error`: An error if token validation fails.
- **Behavior**:
  - Parses the token using the `jwt.ParseWithClaims` function.
  - Validates the token's signing method and signature.
  - Extracts the `userID` and `role` from the token's claims.

---

### **Struct: `CustomClaims`**
```go
type CustomClaims struct {
	UserID string `json:"user_id"`
	Role   string `json:"role"`
	jwt.StandardClaims
}
```
- **Purpose**: Represents the custom claims used in the JWT token.
- **Fields**:
  - `UserID`: The ID of the user.
  - `Role`: The role of the user.
  - `StandardClaims`: Standard JWT claims (e.g., `ExpiresAt`, `IssuedAt`).

---

### **Initialization (`init` function)**
```go
func init()
```
- **Purpose**: Initializes the JWT configuration.
- **Behavior**:
  - Reads the JWT expiration times (`LONG` and `SHORT`) and the private key from the configuration using `viper`.

---

### Summary of Middleware Functions

| **Function**       | **Purpose**                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `EnsureAdmin`       | Ensures the user has an admin role.                                         |
| `CORS`              | Handles Cross-Origin Resource Sharing (CORS).                              |
| `Authenticator`     | Authenticates requests using a Bearer token.                               |
| `GetUserID`         | Retrieves the `userID` from the context.                                   |
| `GetRole`           | Retrieves the `role` from the context.                                     |
| `GetEmail`          | Retrieves the `email` from the context.                                    |
| `GenerateToken`     | Generates a JWT token for a user.                                          |
| `validateToken`     | Validates a JWT token and extracts the `userID` and `role`.                |

This documentation provides a detailed overview of all the functions in your middleware files. Let me know if you need further clarification or additional details!