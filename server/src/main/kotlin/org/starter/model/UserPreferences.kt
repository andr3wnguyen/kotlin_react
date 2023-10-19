package org.starter.model

import kotlinx.serialization.Serializable

@Serializable
data class UserPreferences(
    val group: String,
    val indoor: String

)

