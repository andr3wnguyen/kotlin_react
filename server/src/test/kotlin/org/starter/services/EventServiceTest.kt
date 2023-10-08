package org.starter.services

import database.EventsDAO
import org.starter.services.EventService
import io.ktor.util.reflect.*
import org.junit.Test
import org.junit.jupiter.api.Assertions.*
import org.mockito.Mockito
import org.starter.model.Event


    //mockity mock https://www.baeldung.com/kotlin/mockito


class EventServiceTest() {

    @Test
    fun eventServiceReturnsEvent() {
        //given
        val mockEventsDAO = Mockito.mock(EventsDAO::class.java)
        Mockito.`when`(mockEventsDAO. getEventById(1)).thenReturn(Event(1,"go for a walk"))

        val service = EventService(mockEventsDAO)

        //when
        val retrievedEvent = service.retrieveEvent(1)

        //then
        assert(retrievedEvent is Event)
    }

    @Test
    fun eventServiceReturn() {
        //given
        val mockEventsDAO = Mockito.mock(EventsDAO::class.java)
        Mockito.`when`(mockEventsDAO. getEventById(1)).thenReturn(Event(1,"go for a walk"))

        val service = EventService(mockEventsDAO)

        //when
        val retrievedEvent = service.retrieveEvent(1)

        //then
        val expected = Event(1,"go for a walk")
        assert(retrievedEvent.equals(expected))
    }

}