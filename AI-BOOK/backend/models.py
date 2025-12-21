from pydantic import BaseModel
from typing import Optional

class GlobalQuery(BaseModel):
    query: str

class SelectedQuery(BaseModel):
    query: str
    selected_text: str

class AgentResponse(BaseModel):
    response: str
    context: Optional[str] = None
