import { useState, useEffect } from 'react';
import axios from 'axios';

import React from 'react';

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
};
