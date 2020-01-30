const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get('/api/accounts/:id', async (req, res) => {
      const { id } = req.params;
      try{
          const acct = await db('accounts').where('id', id);
          res.status(200).json(acct);
      } catch (err) {
          res.status(500).json({message: 'Failed to get account!', err});
      };
  });

  server.get('/api/accounts/', async (req, res) => {
      try{
          const acct = await db('accounts');
          res.status(200).json(acct);
      } catch (err) {
          res.status(500).json({message: 'Failed to get accounts!', err});
      };
  });

  server.post('/api/accounts/', async (req, res) => {
      const body = req.body;

      try{
          const acct = await db('accounts').insert(body);
          res.status(200).json(acct);
      } catch (err) {
          res.status(500).json({message: 'Failed to get accounts!', err});
      };
  });

  server.put('/api/accounts/:id', async (req, res) => {
      const body = req.body;
      const {id} = req.params;

      try{
          const acct = await db('accounts').where("id", id)
          .update(body);
          res.status(200).json(acct);
      } catch (err) {
          res.status(500).json({message: 'Failed to get accounts!', err});
      };
  });

  server.delete('/api/accounts/:id', async (req, res) => {
      const {id} = req.params;

      try{
          const acct = await db('accounts').where("id", id)
          .del();
          res.status(200).json(acct);
      } catch (err) {
          res.status(500).json({message: 'Failed to get accounts!', err});
      };
  });
module.exports = server;