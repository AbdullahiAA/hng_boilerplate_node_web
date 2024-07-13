
# HNG Stage 3 Task API

## Overview

This API provides an extended interface for user management, roles, and permissions.

## Database Design

<a href="https://ibb.co/2vgXhQ9"><img src="https://i.ibb.co/bszpmZ0/erd-stage-three.png" alt="erd-stage-three" border="0"></a>

## Base URL

```
http://localhost:5050/api/v1
```

## Endpoints

### Healthcheck

#### Check API Health
- **URL:** `/health`
- **Method:** `GET`
- **Description:** Check the health status of the API.
- **Response:**
  - `200 OK`: API is healthy.

### Authentication

#### Register User
- **URL:** `/auth/register`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  - `201 Created`: User registered successfully.
  - `400 Bad Request`: Invalid input.

#### Login
- **URL:** `/auth/login`
- **Method:** `POST`
- **Description:** Authenticate a user and return a JWT.
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  - `200 OK`: Authentication successful, returns token.
  - `401 Unauthorized`: Invalid credentials.

#### Logout
- **URL:** `/auth/logout`
- **Method:** `POST`
- **Description:** Log out a user (blacklist the JWT from the login endpoint).
- **Response:**
  - `204 No Content`: User logged out successfully.
  - `401 Unauthorized`: Invalid credentials.

#### Forgot Password
- **URL:** `/auth/forgot-password`
- **Method:** `POST`
- **Description:** Initiate the password reset process.
- **Request Body:**
  ```json
  {
    "email": "string"
  }
  ```
- **Response:**
  - `200 OK`: Password reset link sent.
  - `400 Bad Request`: Invalid input.

#### Reset Password
- **URL:** `/auth/reset-password`
- **Method:** `POST`
- **Description:** Reset the user's password.
- **Request Body:**
  ```json
  {
    "token": "string",
    "newPassword": "string"
  }
  ```
- **Response:**
  - `200 OK`: Password reset successfully.
  - `400 Bad Request`: Invalid input.

#### Generate OTP
- **URL:** `/otp/generate`
- **Method:** `POST`
- **Description:** Generate an OTP for a user.
- **Request Body:**
  ```json
  {
    "email": "string",
  }
  ```
- **Response:**
  - `200 OK`: OTP generated and sent successfully.
  - `400 Bad Request`: Invalid input.

#### Verify OTP
- **URL:** `/otp/verify`
- **Method:** `POST`
- **Description:** Verify the OTP provided by the user.
- **Request Body:**
  ```json
  {
    "email": "string",
    "otp": "string"
  }
  ```
- **Response:**
  - `200 OK`: OTP verified successfully.
  - `400 Bad Request`: Invalid input.

#### Get Authenticated User Profile
- **URL:** `/auth/me`
- **Method:** `GET`
- **Description:** Retrieve the authenticated user's profile.
- **Response:**
  - `200 OK`: User profile retrieved successfully.
  - `401 Unauthorized`: Invalid credentials.

#### Update Authenticated User Profile
- **URL:** `/auth/me`
- **Method:** `PUT`
- **Description:** Update the authenticated user's profile.
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string"
  }
  ```
- **Response:**
  - `200 OK`: User profile updated successfully.
  - `401 Unauthorized`: Invalid credentials.

### Users

#### List Users
- **URL:** `/users`
- **Method:** `GET`
- **Description:** Retrieve a list of all users.
- **Response:**
  - `200 OK`: A list of users.

#### Get User by ID
- **URL:** `/users/{id}`
- **Method:** `GET`
- **Description:** Retrieve details of a specific user by ID.
- **Response:**
  - `200 OK`: User details.

#### Delete User by ID
- **URL:** `/users/{id}`
- **Method:** `DELETE`
- **Description:** Delete a specific user by ID.
- **Response:**
  - `204 No Content`: User deleted successfully.

### Roles

#### Create Role
- **URL:** `/roles`
- **Method:** `POST`
- **Description:** Create a new role.
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```
- **Response:**
  - `201 Created`: Role created successfully.

#### List Roles
- **URL:** `/roles`
- **Method:** `GET`
- **Description:** Retrieve a list of all roles.
- **Response:**
  - `200 OK`: A list of roles.

#### Update Role by ID
- **URL:** `/roles/{id}`
- **Method:** `PUT`
- **Description:** Update a specific role by ID.
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```
- **Response:**
  - `200 OK`: Role updated successfully.

#### Delete Role by ID
- **URL:** `/roles/{id}`
- **Method:** `DELETE`
- **Description:** Delete a specific role by ID.
- **Response:**
  - `204 No Content`: Role deleted successfully.

### Permissions

#### Create Permission
- **URL:** `/permissions`
- **Method:** `POST`
- **Description:** Create a new permission.
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```
- **Response:**
  - `201 Created`: Permission created successfully.

#### List Permissions
- **URL:** `/permissions`
- **Method:** `GET`
- **Description:** Retrieve a list of all permissions.
- **Response:**
  - `200 OK`: A list of permissions.

#### Update Permission by ID
- **URL:** `/permissions/{id}`
- **Method:** `PUT`
- **Description:** Update a specific permission by ID.
- **Request Body:**
  ```json
  {
    "name": "string",
    "description": "string"
  }
  ```
- **Response:**
  - `200 OK`: Permission updated successfully.

#### Delete Permission by ID
- **URL:** `/permissions/{id}`
- **Method:** `DELETE`
- **Description:** Delete a specific permission by ID.
- **Response:**
  - `204 No Content`: Permission deleted successfully.

### Admin

#### Get Admin Dashboard Data
- **URL:** `/admin/dashboard`
- **Method:** `GET`
- **Description:** Retrieve admin dashboard data.
- **Response:**
  - `200 OK`: Admin dashboard data.

#### Get System Logs
- **URL:** `/admin/logs`
- **Method:** `GET`
- **Description:** Retrieve system logs.
- **Response:**
  - `200 OK`: System logs.

### Statistics

#### Get Application Statistics
- **URL:** `/stats`
- **Method:** `GET`
- **Description:** Retrieve application statistics.
- **Response:**
  - `200 OK`: Application statistics.

## Schemas

### User
```json
{
  "id": "string",
  "username": "string",
  "name": "string",
  "email": "string",
  "password": "string",
  "age": "integer"
}
```

### Role
```json
{
  "id": "integer",
  "name": "string",
  "description": "string"
}
```

### Permission
```json
{
  "id": "integer",
  "name": "string",
  "description": "string"
}
```

### AuthResponse
```json
{
  "token": "string"
}
```

### ErrorResponse
```json
{
  "message": "string",
  "status": "string"
}
```

### OTPRequest
```json
{
  "email": "string",
}
```

### OTPVerifyRequest
```json
{
  "email": "string",
  "otp": "string"
}
```

### OTPResponse
```json
{
  "message": "string",
  "otpId": "string"
}
```

### OTPVerifyResponse
```json
{
  "message": "string"
}
```

## Authentication

All endpoints (except those under `/auth` and `/otp`) require a valid JWT token in the `Authorization` header:

```
Authorization: Bearer <token>
```

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of requests. Common codes include:

- `200 OK`: The request was successful.
- `201 Created`: The resource was created successfully.
- `204 No Content`: The request was successful but no content to return.
- `400 Bad Request`: There was an error with the request.
- `401 Unauthorized`: Authentication failed.
- `404 Not Found`: The resource was not found.

## Contact

For any issues or questions, please contact support@example.com.

## Versioning

This API is versioned to ensure backward compatibility and easy maintenance. The current version is 1.0.0.
