const Database = require('./db');

Database.then(async function (db) {
   // inserir dados na tebela
   await db.run(`
      INSERT INTO orphanages (
         lat,
         lgn,
         name,
         about,
         whatsapp,
         images,
         instructions,
         opening_hours,
         open_on_weekends
      ) VALUES (
         "-22.7605206",
         "-47.4155656",
         "Lar das meninas",
         "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
         "998101098",
         "https://images.unsplash.com/photo-1618785572542-09eea56869b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIxNTU5MTIw&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
         "Venha quando se sentir a vontade e traga muito amor e paciência para dar.",
         "Horário de visitas Das 18h até 8h",
         "1"
      );
   `)
   // consultar dados da tabela
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)

   // consultar somente 1 orphanato, pelo id
   const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
   console.log(orphanage)
})
