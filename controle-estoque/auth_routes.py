from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from main import supabase

auth_router = APIRouter(prefix="/auth", tags=["auth"])
