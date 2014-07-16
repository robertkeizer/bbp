#include <node.h>
#include <v8.h>

using namespace v8;
using namespace node;

static Handle<Value> bbp ( const Arguments& args ){
	HandleScope scope;

	//TODO

	return True();
}

extern "C" void init (Handle<Object> target){
	HandleScope scope;
	target->Set( String::New( "bbp" ), FunctionTemplate::New( bbp )->GetFunction( ) );
}
