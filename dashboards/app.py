import streamlit as st
import pandas as pd
import plotly.express as px
import requests

st.set_page_config(page_title="Telecom Analytics", layout="wide")
st.title("Telecom Usage & Plan Fit — Analyst/Admin")

api = st.text_input("Backend API URL", "http://localhost:8080")

tab1, tab2 = st.tabs(["Usage vs. Current Plan", "Recommendations Overview"])

with tab1:
    st.subheader("Mock Usage Data")
    df = pd.DataFrame({
        "user": [f"U{i}" for i in range(1, 21)],
        "dataGBUsed": [i % 15 + 1 for i in range(1, 21)],
        "voiceMinUsed": [i * 10 % 400 for i in range(1, 21)],
        "currentPlan": ["DATA_199", "UNLTD_399", "LITE_149", "UNLTD_399"] * 5
    })
    fig = px.scatter(df, x="dataGBUsed", y="voiceMinUsed", color="currentPlan", hover_name="user")
    st.plotly_chart(fig, use_container_width=True)
    st.download_button("Export CSV", data=df.to_csv(index=False), file_name="usage_export.csv")

with tab2:
    st.subheader("Recent Recommendations (call API if available)")
    token = st.text_input("JWT token (optional)", "")
    if st.button("Fetch My Recos"):
        try:
            r = requests.get(f"{api}/reco/mine", headers={"Authorization": f"Bearer {token}"})
            if r.ok:
                rjson = r.json()
                st.write(rjson)
                if rjson:
                    df2 = pd.DataFrame(rjson)
                    st.bar_chart(df2["score"])
            else:
                st.error(f"API error: {r.status_code}")
        except Exception as e:
            st.error(str(e))
