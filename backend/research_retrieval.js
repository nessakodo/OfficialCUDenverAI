const axios = require('axios');

categories = [""]
  
  try {

      // Semantic Scholar API URL
      const apiUrl = 'https://api.semanticscholar.org/graph/v1/paper/search';

      // we'll have different categories for searching
      const category = req.params.category;


      // Query parameters for the API
      const queryParams = {
          query: category,
          fields: 'url,title,authors,abstract,year',
          openAccessPdf: 1
      };

      // Make the GET request to Semantic Scholar API
      const response = await axios.get(apiUrl, { params: queryParams });
      

      // Send the API response back to the client
      res.status(200).json({
          success: true,
          data: response.data
      });
  } catch (error) {
      console.error('Error fetching data from Semantic Scholar API:', error);

      // Handle error
      res.status(500).json({
          success: false,
          message: 'An error occurred while fetching data.',
          error: error.message
      });
  }