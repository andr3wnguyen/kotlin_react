package org.starter.services

import database.EventsDAO
import org.slf4j.LoggerFactory
import org.starter.model.Event
import kotlin.random.Random

class EventService(private val eventDAO:EventsDAO) {

    private val logger = LoggerFactory.getLogger(this.javaClass)

    val randomNumber: Int = Random.nextInt(1,20)
    //gets an event from

    fun retrieveEvent(id: Int = randomNumber): Event {
        val event = eventDAO.getEventById(id)
        logger.info("Event retrieved: ${event.title}")
        return event
    }
}
