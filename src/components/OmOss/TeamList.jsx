import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import React from "react";
import { Spinner } from "react-bootstrap";

function TeamList(props) {
  const [persons, setPersons] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `https://data.assemble-it.no/wp-json/wc/store/products?per_page=100&category=${props.cat}`;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();

            const data = json.map((item) => {
              if (item.attributes[0] && !item.tags[1]) {
                return {
                  id: item.id, //team cards info
                  name: item.name,
                  image: item.images[1].src,
                  title: item.attributes[0].terms[0].name,
                  mail: item.attributes[1].terms[0].name,
                  phone: item.attributes[2].terms[0].name,
                };
              }
              if (item.categories[0].id === 26) {
                return {
                  id: item.id,
                  name: item.name,
                  image: item.images[1].src, //carousel photos
                  sort: "photo",
                };
              }

              return {
                id: item.id,
                name: item.name, //projects
                image: item.images[1].src,
                cat: item.categories[0].id,
                description: item.description
                  .replace("<p>", "")
                  .replace("</p>", ""),
              };
            });
            // const data1 = data .sort((a, b) => a.name.localeCompare(b.name)); //sorts data alphabetically
            const data1 = data;
            setPersons(data1);
            console.log(url);
            console.log(data1);
          } else {
            setError("An error occurred");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return (
      <div className="spinner">
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="warning" />
      </div>
    );
  }

  if (error) {
    return <div>An error occurred: {error}</div>;
  }
  if (persons[0].cat && !persons[0].sort) {
    return (
      <Carousel>
        {persons.map((person) => (
          <Carousel.Item key={person.id}>
            <div className="item-layout">
              <div
                className="carousel-image"
                style={{ backgroundImage: `url(${person.image})` }}
              ></div>
              <div className="carousel-text">
                <h3>{person.name}</h3>
                <p className="project-description">{person.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
  if (persons[0].sort) {
    return (
      <Carousel>
        {persons.map((person) => (
          <Carousel.Item key={person.id}>
            <div
              className="carousel-image"
              style={{ backgroundImage: `url(${person.image})` }}
            ></div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
  return (
    <>
      {persons.map((person) => (
        <div key={person.id} className="employee">
          <div
            className="image"
            style={{ backgroundImage: `url(${person.image})` }}
          ></div>
          <h3>{person.name}</h3>
          <span>{person.title}</span>
          <span>{person.mail}</span>
          <span>{person.phone}</span>
        </div>
      ))}
    </>
  );
}

export default TeamList;
