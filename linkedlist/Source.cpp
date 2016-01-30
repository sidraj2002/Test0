#include <stdio.h>
#include <stdlib.h>
#include <iomanip>
#include <iostream>
#include <cstdlib>
#include <string>

using namespace std;
struct node* head = NULL;
struct node {
	int x = 0;
    struct node* next;
};

void linkInsert(int val){
	struct node* temp;
	struct node* temp2;
	if (head != NULL){
		temp = new (struct node);
		temp->x = val;
		temp->next = head;
		head = temp;
		printf("\n");
	};  
	if(head == NULL){
		temp = new (struct node);
		temp->x = val;
		temp->next = NULL;
		head = temp;
		printf("\n");
	};
	};

void nInsert(int val, int n){
	struct node* temp = head;
	struct node* temp2;
	struct node* temp3;
	temp2 = new (struct node);
	temp3 = new (struct node);
	temp = head;
	for (int i = 0; i < n; i++){
		temp = temp->next;
	};
	temp3 = temp;
	temp2->next = temp3->next;
	temp2->x = val;
	temp->next = temp2;
	
	
	printf("\n");
}

void listRev(){
	struct node* temp = head;
	struct node* temp2 = NULL;
	while (head != NULL){	
	head = temp->next;
	temp->next = temp2;
	temp2 = temp;
	temp = head;
	};
	head = temp2;
};

void print(){
	struct node* temp = head;
	printf("list is:");
	while (temp != NULL ){	
	printf("%d\n", temp->x);
	temp = temp->next;
	};
	
};
int main(void){
	linkInsert(1);
	linkInsert(2);
	linkInsert(3);
	linkInsert(4);
	linkInsert(5);
	linkInsert(6);
	listRev();
	print();
	nInsert(9, 2);
	print();
	return(0);

}