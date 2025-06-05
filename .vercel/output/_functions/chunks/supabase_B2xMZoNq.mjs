import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://cfnwwubinuizykgebksf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmbnd3dWJpbnVpenlrZ2Via3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4Njc5NjcsImV4cCI6MjA2MzQ0Mzk2N30.i8gdrmXZvE-nDsGkgxp5Fsy3STF-mtJGYQHoMdaVpnk";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
async function hasWorkspaceAccess(workspaceId) {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return false;
  const { data: workspace } = await supabase.from("workspaces").select("owner_id").eq("id", workspaceId).single();
  if (workspace?.owner_id === session.user.id) return true;
  const { data: membership } = await supabase.from("workspace_members").select("role").eq("workspace_id", workspaceId).eq("user_id", session.user.id).single();
  return !!membership;
}
async function hasProjectAccess(projectId) {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return false;
  const { data: project } = await supabase.from("projects").select("workspace_id").eq("id", projectId).single();
  if (!project) return false;
  return hasWorkspaceAccess(project.workspace_id);
}
async function getProject(projectId) {
  const { data, error } = await supabase.from("projects").select("*").eq("id", projectId).single();
  if (error) throw error;
  return data;
}
async function getWorkspace(workspaceId) {
  const { data, error } = await supabase.from("workspaces").select("*").eq("id", workspaceId).single();
  if (error) throw error;
  return data;
}

export { hasWorkspaceAccess as a, getWorkspace as b, getProject as g, hasProjectAccess as h, supabase as s };
