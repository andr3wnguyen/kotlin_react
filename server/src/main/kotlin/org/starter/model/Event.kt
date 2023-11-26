package org.starter.model

import kotlinx.serialization.Serializable
@Serializable
data class Event(
        val id: Int,
        val activity: String,
        val location: String,
        val climate: String,
        val historical: String,
        val activities: String,
        val budget: String,
        val description: String,
        val image: String
)