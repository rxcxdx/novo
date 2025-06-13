import "bootstrap/dist/css/bootstrap.css";
import "./estilo.css";
import axios from "axios";
import { Chart, registerables } from "chart.js";

axios.defaults.baseURL = process.env.PUBLIC_BASE_URL
axios.defaults.timeout = 15000;
Chart.register(...registerables);