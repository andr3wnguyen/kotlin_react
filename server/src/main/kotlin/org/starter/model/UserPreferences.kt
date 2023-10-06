package org.starter.model

import kotlinx.serialization.Serializable

@Serializable
data class UserPreferences(
    val group: Boolean,
    val indoor: Boolean

)

