package org.starter

import database.EventsDAO
import io.ktor.server.application.*
import org.starter.apps.ComponentRegistry
import org.starter.plugins.configureContentNegotation
import org.starter.plugins.configureHTTP
import org.starter.plugins.configureRouting
import org.starter.services.EventService
import org.starter.utils.ConfigUtils.loadConfig

fun main(args: Array<String>): Unit =
    io.ktor.server.netty.EngineMain.main(args)

@Suppress("unused") // application.yaml references the main function. This annotation prevents the IDE from marking it as unused.
fun Application.module() {
    val appEnvironment = environment.config.propertyOrNull("app.environment")?.getString()

    val appConfig = loadConfig(appEnvironment)
    val eventService = EventService(EventsDAO())

    configureHTTP()
    configureRouting(eventService)
    configureContentNegotation()
}
