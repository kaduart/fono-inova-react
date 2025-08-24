// pages/Articles.jsx
import { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';
import { articlesData } from '../data/articlesData';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(articlesData);
  }, []);

  return (
    <Layout>
      <Container maxWidth="lg" className="py-16 mt-16">
        <Box textAlign="center" mb={6}>
          <Typography variant="h2" component="h1" className="font-poppins font-bold mb-4">
            Artigos sobre <span className="text-accent">Desenvolvimento Infantil</span>
          </Typography>
          <Typography variant="h6" color="textSecondary" className="max-w-2xl mx-auto">
            Confira nossos conteúdos exclusivos sobre terapias e desenvolvimento infantil.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid item xs={12} md={6} lg={4} key={article.id}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Articles;