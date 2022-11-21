import { Button, Htag, Input, P, Rating, Tag, Textarea } from '../components';
import React, { useState } from 'react';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Title</Htag>
      <Button appearance="ghost" arrow="right">
        {' '}
        Click{' '}
      </Button>
      <Button appearance="primary" arrow="right">
        {' '}
        Click{' '}
      </Button>
      <P size="l">Big</P>
      <P>Medium</P>
      <P size="s">Smile</P>
      <Tag size="s" color="primary">
        {' '}
        smil{' '}
      </Tag>
      <Tag size="m" color="red">
        {' '}
        Midl{' '}
      </Tag>
      <Tag color="grey"> Gray </Tag>
      <Tag color="green"> Gray </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="test" />
      <Textarea placeholder="hay man" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
