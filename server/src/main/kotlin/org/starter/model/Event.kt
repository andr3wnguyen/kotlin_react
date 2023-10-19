package org.starter.model

import kotlinx.serialization.Serializable
@Serializable
data class Event(
        val id: Int,
        val title: String,
        val group: String,
        val indoor: String,
)