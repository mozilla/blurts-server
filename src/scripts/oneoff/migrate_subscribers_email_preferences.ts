import createDbConnection from "../../db/connect";
const knex = createDbConnection();

async function migrateData() {
  const batchSize = 100; // Number of records to process at a time
  let offset = 0;
  let continueFetching = true;

  try {
    while (continueFetching) {
      // Fetch a batch of records
      const subscribers = await knex("subscribers")
        .select(
          "id",
          "all_emails_to_primary",
          "monthly_monitor_report",
          "monthly_monitor_report_at",
        )
        .limit(batchSize)
        .offset(offset);

      // Prepare batch for insertion
      const batch = subscribers.map((subscriber) => ({
        subscriber_id: subscriber.id,
        instant_breach_alert:
          subscriber.all_emails_to_primary === null ? false : true,
        all_emails_to_primary:
          subscriber.all_emails_to_primary === null ||
          subscriber.all_emails_to_primary === true,
        monthly_monitor_report: subscriber.monthly_monitor_report,
        monthly_monitor_report_at: subscriber.monthly_monitor_report_at,
      }));

      // Bulk insert the batch
      await knex("subscriber_email_preferences")
        .insert(batch)
        .onConflict("subscriber_id")
        .ignore();
      console.log(`Inserted ${batch.length} records from offset ${offset}.`);

      // Increment offset to fetch the next batch
      offset += batchSize;

      // If the number of records fetched is less than the batch size, stop fetching
      if (subscribers.length < batchSize) {
        continueFetching = false;
      }
    }

    console.log(`Data migration completed successfully. Total: ${offset}`);
  } catch (error) {
    console.error("Error during data migration:", error);
  } finally {
    // Close the database connection
    await knex.destroy();
  }
}

// Run the migration function
migrateData();
