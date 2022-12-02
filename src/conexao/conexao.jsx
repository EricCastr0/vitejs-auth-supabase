import { createClient } from '@supabase/supabase-js'


export const supabase = createClient(
    "https://rlrnpvaynktojozmjsfg.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5wdmF5bmt0b2pvem1qc2ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk5MDk1MjcsImV4cCI6MTk4NTQ4NTUyN30.QmgcrqlehyHfHq2Dzij0McGA5oyFCnS-LZr44ybtsvc");