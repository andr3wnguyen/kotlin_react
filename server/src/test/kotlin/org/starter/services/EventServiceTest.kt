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
        Mockito.`when`(mockEventsDAO. getEventById(2)).thenReturn(Event(2,"Safari","Maasai Mara, Kenya","hot","ancient","rural","adventure","plains","luxury","tranquility","Embark on a thrilling safari in the Maasai Mara, home to diverse wildlife.","https://upload.wikimedia.org/wikipedia/commons/1/17/Masai_Mara_at_Sunset.jpg"))

        val service = EventService(mockEventsDAO)

        //when
        val retrievedEvent = service.retrieveSingleEvent(2)

        //then
        assert(retrievedEvent is Event)
    }

    @Test
    //gets events given user preferences
    fun eventServiceReturn() {
        //given
        val userPreference = UserPreferences("hot","ancient","rural","adventure","plains","luxury","tranquility")
        val mockEventsDAO = Mockito.mock(EventsDAO::class.java)
        Mockito.`when`(mockEventsDAO. getFilteredEvents(userPreference)).thenReturn(listOf( Event(2,"Safari","Maasai Mara, Kenya","hot","ancient","rural","adventure","plains","luxury","tranquility","Embark on a thrilling safari in the Maasai Mara, home to diverse wildlife.","https://upload.wikimedia.org/wikipedia/commons/1/17/Masai_Mara_at_Sunset.jpg")))

        val service = EventService(mockEventsDAO)

        //when
        val retrievedEvent = service.retrieveEvents(userPreference)

        //then
        val expected = listOf(Event(2,"Safari","Maasai Mara, Kenya","hot","ancient","rural","adventure","plains","luxury","tranquility","Embark on a thrilling safari in the Maasai Mara, home to diverse wildlife.","https://upload.wikimedia.org/wikipedia/commons/1/17/Masai_Mara_at_Sunset.jpg"))
        assert(retrievedEvent == expected)
    }

    @Test
    //gets all events
    fun eventServiceReturnsAll() {
        //given
        val mockEventsDAO = Mockito.mock(EventsDAO::class.java)
        Mockito.`when`(mockEventsDAO. getEvent()).thenReturn(listOf((Event(1,"Hiking","Swiss Alps","cold","ancient","rural","adventure","mountains","luxury","tranquility","Explore the breathtaking Swiss Alps through scenic hiking trails.","https://deih43ym53wif.cloudfront.net/small_zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg"))))

        val service = EventService(mockEventsDAO)

        //when
        val retrievedEvent = service.retrieveAllEvents()

        //then
        val expected = listOf(Event(1,"Hiking","Swiss Alps","cold","ancient","rural","adventure","mountains","luxury","tranquility","Explore the breathtaking Swiss Alps through scenic hiking trails.","https://deih43ym53wif.cloudfront.net/small_zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg"))
        assert(retrievedEvent == expected)
    }
}