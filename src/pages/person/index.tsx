// External Dependencies
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

// Internal Dependencies
import Page from '../../components/layout/Page';
import { Person } from '../../api/types/people';
import { getPerson } from '../../api/people';
import { Link } from 'react-router-dom';
import PersonStats from './Stats';

// Local Typings
interface RouteProps {
  id: string;
}

const PersonPage: React.FC<RouteComponentProps<RouteProps>> = (props) => {
  const [person, setPerson] = useState<Person | null>(null);
  const personId = Number(props.match.params.id);

  async function fetchPerson(id: number) {
    try {
      const response = await getPerson(id);
      const [responsePerson] = response.data.people;
      if (responsePerson) {
        setPerson(responsePerson);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPerson(personId);
  }, [personId])

  if (!person) {
    return null;
  }

  return (
    <Page>
      <h2>{person.fullName}</h2>

      <h3>Birth City: {person.birthCity}</h3>
      <h3>Birth Country: {person.birthCountry}</h3>
      <h3>Birth Date: {person.birthDate}</h3>

      <h4>
        <Link to={`/teams/${person.currentTeam.id}`}>
          Team: {person.currentTeam.name}
        </Link>
      </h4>

      <PersonStats personId={personId} />
    </Page>
  );
}

export default PersonPage;
