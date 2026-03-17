import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/getting-started',
      permanent: false,
    },
  };
};

export default function Docs() {
  return null;
}

