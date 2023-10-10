package org.starter.services

import database.EventsDAO
import org.slf4j.LoggerFactory
import org.starter.model.Event
import org.starter.model.UserPreferences
import kotlin.random.Random

class EventService(private val eventDAO:EventsDAO) {

    private val logger = LoggerFactory.getLogger(this.javaClass)


    //gets an event from

    fun retrieveEvents(userPreferences: UserPreferences): List<Event> {
        val event = eventDAO.getFilteredEvents(userPreferences)
        logger.info("Events retrieved: $event")
        return event
    }

    fun retrieveAllEvents(): List<Event> {
        val event = eventDAO.getEvent()
        logger.info("Events retrieved: $event")
        return event
    }
}
