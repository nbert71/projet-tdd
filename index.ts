import { app } from "./src/app"
import { logger } from "./src/logger"

const port:number = 3000

app.listen(port, () => {
    logger.info(`Example app listening on port ${port}`)
    // console.log(`Example app listening on port ${port}`)
})

