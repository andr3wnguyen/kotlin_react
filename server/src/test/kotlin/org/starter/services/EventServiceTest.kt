package org.starter.services

import database.EventsDAO

import org.junit.Test
import org.mockito.Mockito
import org.starter.model.Event
import org.starter.model.UserPreferences


//mockity mock https://www.baeldung.com/kotlin/mockito


class EventServiceTest() {

    @Test
    //return a value given an event id
    fun eventServiceReturnsEvent() {
        //given
        val mockEventsDAO = Mockito.mock(EventsDAO::class.java)
        Mockito.`when`(mockEventsDAO. getEventById(1)).thenReturn(Event(1,"go for a walk", group="group", indoor="outdoor", "none","none"))

        val service = EventService(mockEventsDAO)

        //when
        val retrievedEvent = service.retrieveSingleEvent(1)

        //then
        assert(retrievedEvent is Event)
    }

    @Test
    //gets events given user preferences
    fun eventServiceReturn() {
        //given
        val userPreference = UserPreferences("group","outdoor")
        val mockEventsDAO = Mockito.mock(EventsDAO::class.java)
        Mockito.`when`(mockEventsDAO. getFilteredEvents(userPreference)).thenReturn(listOf( Event(1,"go for a walk", group="group", indoor="outdoor", "none","none")))

        val service = EventService(mockEventsDAO)

        //when
        val retrievedEvent = service.retrieveEvents(userPreference)

        //then
        val expected = listOf(Event(1,"go for a walk", group="group", indoor="outdoor", "none","none"))
        assert(retrievedEvent == expected)
    }

    @Test
    //gets all events
    fun eventServiceReturnsAll() {
        //given
        val mockEventsDAO = Mockito.mock(EventsDAO::class.java)
        Mockito.`when`(mockEventsDAO. getEvent()).thenReturn(listOf((Event(1,"go for a walk", group="group", indoor="outdoor", "none","none"))))

        val service = EventService(mockEventsDAO)

        //when
        val retrievedEvent = service.retrieveAllEvents()

        //then
        val expected = listOf(Event(1,"go for a walk", group="group", indoor="outdoor", "none","none"))
        assert(retrievedEvent == expected)
    }
}