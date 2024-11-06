import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import styles from './Mapa.module.css'
const worldMapURL = "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";
const brazilStatesMapURL = "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";

// Definindo distribuidores por estado
const distribuidoresPorEstado = {
  "AC": [
      { nome: "João Silva", estado: "Acre" },
      { nome: "Maria Oliveira", estado: "Acre" },
      { nome: "Carlos Santos", estado: "Acre" },
  ],
  "AL": [
      { nome: "Ana Costa", estado: "Alagoas" },
      { nome: "Pedro Almeida", estado: "Alagoas" },
      { nome: "Luiza Pereira", estado: "Alagoas" },
  ],
  "AP": [
      { nome: "José Ferreira", estado: "Amapá" },
      { nome: "Fernanda Rocha", estado: "Amapá" },
      { nome: "Ricardo Lima", estado: "Amapá" },
  ],
  "AM": [
      { nome: "Mariana Martins", estado: "Amazonas" },
      { nome: "Gabriel Nascimento", estado: "Amazonas" },
      { nome: "Juliana Mendes", estado: "Amazonas" },
  ],
  "BA": [
      { nome: "Felipe Souza", estado: "Bahia" },
      { nome: "Tatiane Almeida", estado: "Bahia" },
      { nome: "Thiago Ribeiro", estado: "Bahia" },
  ],
  "CE": [
      { nome: "Isabela Ferreira", estado: "Ceará" },
      { nome: "Rafael Santos", estado: "Ceará" },
      { nome: "Sofia Lima", estado: "Ceará" },
  ],
  "DF": [
      { nome: "André Costa", estado: "Distrito Federal" },
      { nome: "Bianca Almeida", estado: "Distrito Federal" },
      { nome: "Lucas Rocha", estado: "Distrito Federal" },
  ],
  "ES": [
      { nome: "Gabriela Martins", estado: "Espírito Santo" },
      { nome: "Eduardo Lima", estado: "Espírito Santo" },
      { nome: "Priscila Nascimento", estado: "Espírito Santo" },
  ],
  "GO": [
      { nome: "Rodrigo Ferreira", estado: "Goiás" },
      { nome: "Vanessa Santos", estado: "Goiás" },
      { nome: "Rogério Almeida", estado: "Goiás" },
  ],
  "MA": [
      { nome: "Marcos Paulo", estado: "Maranhão" },
      { nome: "Tatiane Rocha", estado: "Maranhão" },
      { nome: "Bruno Mendes", estado: "Maranhão" },
  ],
  "MT": [
      { nome: "Roberta Lima", estado: "Mato Grosso" },
      { nome: "Guilherme Nascimento", estado: "Mato Grosso" },
      { nome: "Larissa Ferreira", estado: "Mato Grosso" },
  ],
  "MS": [
      { nome: "Natália Santos", estado: "Mato Grosso do Sul" },
      { nome: "Felipe Almeida", estado: "Mato Grosso do Sul" },
      { nome: "Karina Lima", estado: "Mato Grosso do Sul" },
  ],
  "MG": [
      { nome: "Mariana Ribeiro", estado: "Minas Gerais" },
      { nome: "Caio Ferreira", estado: "Minas Gerais" },
      { nome: "Aline Nascimento", estado: "Minas Gerais" },
  ],
  "PA": [
      { nome: "Hugo Silva", estado: "Pará" },
      { nome: "Jéssica Oliveira", estado: "Pará" },
      { nome: "Samuel Almeida", estado: "Pará" },
  ],
  "PB": [
      { nome: "Sérgio Costa", estado: "Paraíba" },
      { nome: "Viviane Santos", estado: "Paraíba" },
      { nome: "Gustavo Rocha", estado: "Paraíba" },
  ],
  "PR": [
      { nome: "Diego Mendes", estado: "Paraná" },
      { nome: "Camila Lima", estado: "Paraná" },
      { nome: "Henrique Ferreira", estado: "Paraná" },
  ],
  "PE": [
      { nome: "Tatiane Martins", estado: "Pernambuco" },
      { nome: "Eduardo Souza", estado: "Pernambuco" },
      { nome: "Jessica Ribeiro", estado: "Pernambuco" },
  ],
  "PI": [
      { nome: "Fábio Lima", estado: "Piauí" },
      { nome: "Luciana Santos", estado: "Piauí" },
      { nome: "Anderson Almeida", estado: "Piauí" },
  ],
  "RJ": [
      { nome: "Rafael Oliveira", estado: "Rio de Janeiro" },
      { nome: "Patrícia Costa", estado: "Rio de Janeiro" },
      { nome: "Lucas Ferreira", estado: "Rio de Janeiro" },
  ],
  "RN": [
      { nome: "Mariana Almeida", estado: "Rio Grande do Norte" },
      { nome: "José Nascimento", estado: "Rio Grande do Norte" },
      { nome: "Isabella Santos", estado: "Rio Grande do Norte" },
  ],
  "RS": [
      { nome: "Thiago Silva", estado: "Rio Grande do Sul" },
      { nome: "Larissa Costa", estado: "Rio Grande do Sul" },
      { nome: "Gustavo Almeida", estado: "Rio Grande do Sul" },
  ],
  "RO": [
      { nome: "Nathalia Ferreira", estado: "Rondônia" },
      { nome: "André Santos", estado: "Rondônia" },
      { nome: "Juliane Nascimento", estado: "Rondônia" },
  ],
  "RR": [
      { nome: "João Pedro", estado: "Roraima" },
      { nome: "Camila Ferreira", estado: "Roraima" },
      { nome: "Vinícius Lima", estado: "Roraima" },
  ],
  "SC": [
      { nome: "Marcos Lima", estado: "Santa Catarina" },
      { nome: "Aline Ferreira", estado: "Santa Catarina" },
      { nome: "Diego Santos", estado: "Santa Catarina" },
  ],
  "SP": [
      { nome: "Fernanda Oliveira", estado: "São Paulo" },
      { nome: "Carlos Silva", estado: "São Paulo" },
      { nome: "Sofia Almeida", estado: "São Paulo" },
  ],
  "SE": [
      { nome: "Ricardo Costa", estado: "Sergipe" },
      { nome: "Bruna Lima", estado: "Sergipe" },
      { nome: "Vinícius Almeida", estado: "Sergipe" },
  ],
  "TO": [
      { nome: "Gabriel Santos", estado: "Tocantins" },
      { nome: "Patrícia Oliveira", estado: "Tocantins" },
      { nome: "Anderson Lima", estado: "Tocantins" },
  ],
   "Brazil": [
    { nome: "Gabriel Santos", estado: "Tocantins" },
    { nome: "Carlos Silva", estado: "São Paulo" },
    { nome: "Camila Ferreira", estado: "Roraima" },
],
};
const MapaInterativo = ({ setTitulo, setDistribuidores }) => {
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState([0, 0]);
  const [paisSelecionado, setPaisSelecionado] = useState(null);

  const handleCountryClick = (geo) => {
    const countryName = geo.properties.name;

    if (countryName === "Brazil") {
        setZoom(5);
        setCenter([-54.9, -14.2]);
        setPaisSelecionado(countryName);
        setTitulo(countryName);
        
        // Adicione aqui o log para distribuidores do Brasil
        const distribuidores = distribuidoresPorEstado["Brazil"];
        setDistribuidores(distribuidores);
    }
};

  const handleRegionClick = (geo) => {
    const regionName = geo.properties.sigla; // Verifica a sigla do estado

    // Verifique se a sigla existe no objeto distribuidoresPorEstado
    if (distribuidoresPorEstado[regionName]) {
        const distribuidores = distribuidoresPorEstado[regionName];
        setDistribuidores(distribuidores);
    } else {
        setDistribuidores([]);
    }
};

  const voltarNivel = () => {
      setZoom(1);
      setCenter([0, 0]);
      setPaisSelecionado(null);
      setTitulo("Mundo");
      setDistribuidores([]); // Limpa os distribuidores ao voltar
  };

  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{
                width: '100%',
                maxWidth: '800px',
                height: 'auto', 
                paddingTop: '56.25%', 
                position: 'relative',
                overflow: 'hidden'
}}>
              <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{
                      scale: 110,
                      center: center,
                  }}
                  style={{
                      transform: `scale(${zoom})`,
                      transition: 'transform 0.5s ease-in-out',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                  }}
              >
                  <Geographies geography={worldMapURL}>
                      {({ geographies }) =>
                          geographies.map((geo) => (
                              <Geography
                                  key={geo.rsmKey}
                                  geography={geo}
                                  onClick={() => handleCountryClick(geo)}
                                  style={{
                                      default: { fill: "#0f9f48", outline: "none" },
                                      hover: { fill: "#37D111", cursor: "pointer", outline: "none" },
                                      pressed: { fill: "#37D111", outline: "none" },
                                  }}
                              />
                          ))
                      }
                  </Geographies>

                  {paisSelecionado === "Brazil" && (
                      <Geographies geography={brazilStatesMapURL}>
                          {({ geographies }) =>
                              geographies.map((geo) => (
                                  <Geography
                                      key={geo.rsmKey}
                                      geography={geo}
                                      onClick={() => handleRegionClick(geo)}
                                      style={{
                                          default: { fill: "#D0E0E3", outline: "none" },
                                          hover: { fill: "#37D111", cursor: "pointer", outline: "none" },
                                          pressed: { fill: "#37D111", outline: "none" },
                                      }}
                                  />
                              ))
                          }
                      </Geographies>
                  )}
              </ComposableMap>
          </div>

          {paisSelecionado === "Brazil" && (
              <button onClick={voltarNivel} style={{ marginTop: '10px' }} className={styles.button}>Voltar</button>
          )}
      </div>
  );
};

export default MapaInterativo;