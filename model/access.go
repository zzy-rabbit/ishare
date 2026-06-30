package model

type Access struct {
	IP        string   `json:"ip"`
	UserAgent string   `json:"user_agent"`
	Locations []string `json:"locations"`
	Time      int64    `json:"time"`
	Trace     string   `json:"trace"`
	Method    string   `json:"method"`
	Path      string   `json:"path"`
}
