package org.starter.plugins

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.ExperimentalSerializationApi
import org.starter.apps.ComponentRegistry
import org.starter.model.Ping
import org.starter.model.Pong
import org.starter.model.UserPreferences
import org.starter.services.EventService

@OptIn(ExperimentalSerializationApi::class)
fun Application.configureRouting(eventService: EventService) {

    routing {
        staticResources("/", "web")

        post("/ping") {
            val ping = call.receive<Ping>()
            val pong = Pong(ping.message, ping.number)
            call.respond(pong)
        }

        //make a post of user preferences and return an event from the eventDAO
        post("/preference") {
            val userPreferences = call.receive<UserPreferences>()
            //add code to do something
            val retrievedEvent = eventService.retrieveEvent()
            call.response.status(HttpStatusCode.OK)
            call.respond(retrievedEvent)
        }

        get("/preference") {
            val event = eventService.retrieveEvent(1)
            call.respond(event)
        }
    }
}
