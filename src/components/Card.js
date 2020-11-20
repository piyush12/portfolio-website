import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
  background: ${({ theme }) =>
    theme.theme === "dark-mode" ? "#193f7d" : "#e0e4ea"};
  margin-bottom: 5rem;
  border-radius: 10px;
  text-align: left;
  overflow: hidden;
  padding-bottom: 2rem;
  border: 4px solid
    ${({ theme }) => (theme.theme === "dark-mode" ? "#193f7d" : "#e0e4ea")};
  img {
    margin-bottom: 2rem;
  }

  h3 {
    color: var(--text-color);
    margin-bottom: 1.5rem;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
  }
  .card-image {
    margin: 0 -25px;
  }
  .tags {
    background-color: var(--primary-light);
    border-radius: 2px;
    padding: 0.4rem;
    margin-right: 1rem;
    color: #fff;
  }
`;
function Card({ image, description, title, url }) {
  return (
    <CardStyle>
      <div className="card-image">
        <a href={url} target="_blank" rel="noreferrer">
          <img src={image} alt={title} />
        </a>
      </div>
      <div className="card-description">
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>
          {description.split(",").map((tag) => (
            <span key={tag} className="tags">
              {tag}
            </span>
          ))}
        </p>
      </div>
    </CardStyle>
  );
}

export default Card;
