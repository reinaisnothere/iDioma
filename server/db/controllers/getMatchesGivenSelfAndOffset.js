const db = require('../db.js');

module.exports = (self, offSet) => {
  const queryString = `(
                        SELECT users_languages_levels.user AS teach_id FROM users_languages_levels 
                         INNER JOIN languages_levels 
                           ON users_languages_levels.languages_levels = languages_levels.id
                         INNER JOIN languages
                           ON languages_levels.language = language.id
                         INNER JOIN levels
                           ON languages_levels.level = level.id
                         WHERE language.name IN (${self.canTeach.map(language => language[0]).join(',')}) AND level.name IN ('fluent', 'native')
                        ) AS teach
                        INNER JOIN
                        
                      `;
  // db.query();
};
