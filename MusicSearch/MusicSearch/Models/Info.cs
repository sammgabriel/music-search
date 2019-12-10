using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace MusicSearch.Models
{
    public class Info
    {

        public long Id { get; set; }

        public string Artist { get; set; }

        public string Song { get; set; }

        public string Album { get; set; }

        public string Genre { get; set; }

        public string Url { get; set; }

        [JsonPropertyName("img")]
        public string Image { get; set; }

        public override string ToString() => JsonSerializer.Serialize<Info>(this);
    }

}
