package org.starter.services

import database.EventsDAO

import org.junit.Test
import org.mockito.Mockito
import org.starter.model.Event


    //mockity mock https://www.baeldung.com/kotlin/mockito


class EventServiceTest() {

    @Test
    fun eventServiceReturnsEvent() {
        //given
        val mockEventsDAO = Mockito.mock(EventsDAO::class.java)
        Mockito.`when`(mockEventsDAO. getEventById(1)).thenReturn(Event(1,"go for a walk", group=true, indoor=true))

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
        Mockito.`when`(mockEventsDAO. getEventById(1)).thenReturn(Event(1,"go for a walk", group=true, indoor=true))

        val service = EventService(mockEventsDAO)

        //when
        val retrievedEvent = service.retrieveEvent(1)

        //then
        val expected = Event(1,"go for a walk", group=true, indoor=true)
        assert(retrievedEvent.equals(expected))
    }

}