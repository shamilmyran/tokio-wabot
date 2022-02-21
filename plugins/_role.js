let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 10) ? 'Beginner'
          : ((user.level >= 10) && (user.level <= 20)) ? '6 division'
          : ((user.level >= 20) && (user.level <= 30)) ? '5 division'
          : ((user.level >= 30) && (user.level <= 40)) ? '4 division'
          : ((user.level >= 40) && (user.level <= 50)) ? '3 division'
          : ((user.level >= 50) && (user.level <= 60)) ? '2 division'
          : ((user.level >= 60) && (user.level <= 70)) ? '1 division'
          : ((user.level >= 70) && (user.level <= 80)) ? 'Special division'
          : 'Legend'
  user.role = role
  return true
}

module.exports = handler
