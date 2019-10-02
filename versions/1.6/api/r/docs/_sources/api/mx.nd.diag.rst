

``mx.nd.diag``
============================

Description
----------------------

Extracts a diagonal or constructs a diagonal array.

``diag``'s behavior depends on the input array dimensions:

	- 1-D arrays: constructs a 2-D array with the input as its diagonal, all other elements are zero.
	- N-D arrays: extracts the diagonals of the sub-arrays with axes specified by ``axis1`` and ``axis2``.
  The output shape would be decided by removing the axes numbered ``axis1`` and ``axis2`` from the
  input shape and appending to the result a new axis with the size of the diagonals in question.

  For example, when the input shape is `(2, 3, 4, 5)`, ``axis1`` and ``axis2`` are 0 and 2
  respectively and ``k`` is 0, the resulting shape would be `(3, 5, 2)`.


**Example**::

	 
	 x = [[1, 2, 3],
	 [4, 5, 6]]
	 
	 diag(x) = [1, 5]
	 
	 diag(x, k=1) = [2, 6]
	 
	 diag(x, k=-1) = [4]
	 
	 x = [1, 2, 3]
	 
	 diag(x) = [[1, 0, 0],
	 [0, 2, 0],
	 [0, 0, 3]]
	 
	 diag(x, k=1) = [[0, 1, 0],
	 [0, 0, 2],
	 [0, 0, 0]]
	 
	 diag(x, k=-1) = [[0, 0, 0],
	 [1, 0, 0],
	 [0, 2, 0]]
	 
	 x = [[[1, 2],
	 [3, 4]],
	 
	 [[5, 6],
	 [7, 8]]]
	 
	 diag(x) = [[1, 7],
	 [2, 8]]
	 
	 diag(x, k=1) = [[3],
	 [4]]
	 
	 diag(x, axis1=-2, axis2=-1) = [[1, 4],
	 [5, 8]]
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input ndarray                                              |
+----------------------------------------+------------------------------------------------------------+
| ``k``                                  | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | Diagonal in question. The default is 0. Use k>0 for        |
|                                        | diagonals above the main diagonal, and k<0 for diagonals   |
|                                        | below the main diagonal. If input has shape (S0 S1) k must |
|                                        | be between -S0 and                                         |
|                                        | S1                                                         |
+----------------------------------------+------------------------------------------------------------+
| ``axis1``                              | int, optional, default='0'.                                |
|                                        |                                                            |
|                                        | The first axis of the sub-arrays of interest. Ignored when |
|                                        | the input is a 1-D                                         |
|                                        | array.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``axis2``                              | int, optional, default='1'.                                |
|                                        |                                                            |
|                                        | The second axis of the sub-arrays of interest. Ignored     |
|                                        | when the input is a 1-D                                    |
|                                        | array.                                                     |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/diag_op.cc#L87

