import React, { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { Pie3D, Column3D, Bar3D, Doughnut2d } from './Charts';

interface ILanguageTotal {
  [key: string]: {
    label: string;
    value: number;
    stars: number;
  };
}

const Repos = () => {
  const { repos } = useContext(GithubContext)!;

  const languages = repos.reduce((total: ILanguageTotal, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = {
        label: language,
        value: 1,
        stars: stargazers_count || 0,
      };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + (stargazers_count || 0),
      };
    }
    return total;
  }, {});

  // user's top 5 most used languages
  const mostUsedLanguages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  // user's most stars per language (top 5)
  const mostPopular = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .map((item) => ({ ...item, value: item.stars }))
    .slice(0, 5);

  // stars, forks
  interface ITotal {
    stars: { [key: number]: { label: string; value: number } };
    forks: { [key: number]: { label: string; value: number } };
  }
  let { stars, forks } = repos.reduce(
    (total: ITotal, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={mostUsedLanguages} />
        <Column3D data={stars} />
        <Doughnut2d data={mostPopular} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
