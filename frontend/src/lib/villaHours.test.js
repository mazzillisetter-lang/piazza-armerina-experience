import { formatVillaChangeDate, getVillaOpeningHours } from "./villaHours";

describe("orario ordinario Villa Romana del Casale", () => {
  test.each([
    [2026, "2026-03-29T01:00:00.000Z", "2026-10-25T01:00:00.000Z"],
    [2027, "2027-03-28T01:00:00.000Z", "2027-10-31T01:00:00.000Z"],
    [2028, "2028-03-26T01:00:00.000Z", "2028-10-29T01:00:00.000Z"],
  ])("cambia esattamente alle due transizioni del %i", (year, march, october) => {
    const spring = new Date(march);
    const autumn = new Date(october);
    expect(getVillaOpeningHours(new Date(spring.getTime() - 1))).toMatchObject({ season: "winter", opens: "09:00", lastEntry: "16:00", closes: "17:00", nextChange: spring });
    expect(getVillaOpeningHours(spring)).toMatchObject({ season: "summer", opens: "09:00", lastEntry: "18:00", closes: "19:00", nextChange: autumn });
    expect(getVillaOpeningHours(new Date(autumn.getTime() - 1)).season).toBe("summer");
    expect(getVillaOpeningHours(autumn)).toMatchObject({ season: "winter", lastEntry: "16:00", closes: "17:00", nextSeason: "summer" });
    expect(getVillaOpeningHours(autumn).nextChange.getUTCFullYear()).toBe(year + 1);
  });

  test("gestisce anno bisestile e passaggio dicembre-gennaio in Italia", () => {
    expect(getVillaOpeningHours("2028-02-29T12:00:00Z").season).toBe("winter");
    expect(getVillaOpeningHours("2026-12-31T23:30:00Z").nextChange.toISOString()).toBe("2027-03-28T01:00:00.000Z");
    expect(getVillaOpeningHours("2027-01-01T00:30:00Z").nextChange.toISOString()).toBe("2027-03-28T01:00:00.000Z");
  });

  test("lo stesso istante produce lo stesso orario per visitatori in fusi diversi", () => {
    const european = getVillaOpeningHours("2027-03-28T03:00:00+02:00");
    const american = getVillaOpeningHours("2027-03-27T18:00:00-07:00");
    const asian = getVillaOpeningHours("2027-03-28T08:00:00+07:00");
    expect(american).toEqual(european);
    expect(asian).toEqual(european);
    expect(european.season).toBe("summer");
  });

  test("formatta il cambio in italiano usando sempre Europe/Rome", () => {
    expect(formatVillaChangeDate(new Date("2027-03-28T01:00:00Z"))).toBe("28 marzo 2027");
    expect(getVillaOpeningHours("2026-11-03T10:00:00Z")).toMatchObject({ season: "winter", timeZone: "Europe/Rome" });
  });

  test("non accetta una data invalida e non modifica l'input", () => {
    expect(() => getVillaOpeningHours(new Date("invalid"))).toThrow(RangeError);
    const input = new Date("2027-07-01T10:00:00Z");
    getVillaOpeningHours(input);
    expect(input.toISOString()).toBe("2027-07-01T10:00:00.000Z");
  });
});
