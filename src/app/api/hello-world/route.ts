export async function GET(request: Request) {
    // ...

    return Response.json({ 
        "message": "Hello, Get!" 
    })
}

export async function POST(request: Request) {
    // ...

    return Response.json({ 
        "message": "Hello, Post!" 
    })
}

// GET /api/hello-world -> 200 {"message": "Hello, Get!"}
// POST /api/hello-world -> 200 {"message": "Hello, Post!"}