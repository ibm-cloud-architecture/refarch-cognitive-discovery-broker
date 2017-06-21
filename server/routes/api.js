/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const express = require('express');
const discoveryNewsBroker = require('./features/wds-news');
const discoveryWeatherBroker = require('./features/wds-weather');
const router = express.Router();

router.use('/news', discoveryNewsBroker);
router.use('/weather', discoveryWeatherBroker);

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('API supported: GET /api/all; POST /api/company/product');
});



module.exports = router;
