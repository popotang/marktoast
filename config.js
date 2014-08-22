var rc = require('rc')
  , defaultConfig = {
      title: '马克吐司'
    , description:  'markdown语法书写印象笔记'

    , googleWebmasterMeta: 'DAyGOgtsg8rJpq9VVktKzDkQ1UhXm1FYl8SD47hPkjA'
  }
  ;

module.exports = function(){
  return rc('dillinger', defaultConfig)
}
