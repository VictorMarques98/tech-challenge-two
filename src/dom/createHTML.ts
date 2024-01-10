import { getData } from "../api/getData";
import { Data } from "../types";

function createHTML(data: Data) {
  return `
    <div class="container">
      <div class="header">
        <h2>${data.total}</h2>
        <p class="description">${data.gender}</p>
      </div>

      <div class="content">
        <h3>By country</h3>

        <div class="card-container">
          ${Object.entries(data.country).map(([country, value]) => `
            <div class="card-item bg-${data.bg}">
              <p>${value}</p>
              <span>${country}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

let resultElement = document.getElementById('root');
if (!resultElement) throw new Error('Root element not found');

const jsonData = await getData();

resultElement.innerHTML = jsonData.map(createHTML).join('');