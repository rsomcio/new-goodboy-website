from pathlib import Path

from fastapi import FastAPI, Request, Response
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

static_dir = Path(__file__).parent / "static"


@app.get("/api/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}


assets_dir = static_dir / "assets"
if assets_dir.exists():
    app.mount("/assets", StaticFiles(directory=assets_dir), name="assets")


@app.get("/{path:path}")
async def spa(path: str) -> FileResponse:
    file = static_dir / path
    if file.is_file():
        return FileResponse(file, headers={"Cache-Control": "no-cache"})
    return FileResponse(
        static_dir / "index.html",
        headers={"Cache-Control": "no-cache"},
    )


@app.middleware("http")
async def cache_headers(request: Request, call_next):
    response: Response = await call_next(request)
    if request.url.path.startswith("/assets/"):
        response.headers["Cache-Control"] = "public, max-age=31536000, immutable"
    return response
