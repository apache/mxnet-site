

``mx.symbol.linalg_det``
================================================

Description
----------------------

Compute the determinant of a matrix.
Input is a tensor *A* of dimension *n >= 2*.

If *n=2*, *A* is a square matrix. We compute:

*out* = *det(A)*

If *n>2*, *det* is performed separately on the trailing two dimensions
for all inputs (batch mode).


.. note:: The operator supports float32 and float64 data types only. 
.. note:: There is no gradient backwarded when A is non-invertible (which is           equivalent to det(A) = 0) because zero is rarely hit upon in float           point computation and the Jacobi's formula on determinant gradient           is not computationally efficient when A is non-invertible.


**Example**::

	 
	 Single matrix determinant
	 A = [[1., 4.], [2., 3.]]
	 det(A) = [-5.]
	 
	 Batch matrix determinant
	 A = [[[1., 4.], [2., 3.]],
	 [[2., 3.], [1., 4.]]]
	 det(A) = [-5., 5.]
	 
	 

Usage
----------

.. code:: r

	mx.symbol.linalg_det(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``A``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Tensor of square matrix                                    |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/la_op.cc#L973

